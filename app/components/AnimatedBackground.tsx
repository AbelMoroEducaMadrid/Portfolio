'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 50
    const connectionDistance = 150

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = 5 / (distance * distance)

        this.speedX += dx * force
        this.speedY += dy * force

        this.x += this.speedX
        this.y += this.speedY

        this.speedX *= 0.95
        this.speedY *= 0.95

        if (this.x > canvas!.width) this.x = 0
        else if (this.x < 0) this.x = canvas!.width
        if (this.y > canvas!.height) this.y = 0
        else if (this.y < 0) this.y = canvas!.height
      }

      draw() {
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.closePath()
        ctx!.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        connectParticles(particles[i], particles)
      }
      requestAnimationFrame(animate)
    }

    function connectParticles(p1: Particle, particles: Particle[]) {
      particles.forEach(p2 => {
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
        if (distance < connectionDistance) {
          ctx!.strokeStyle = `rgba(${parseInt(p1.color.slice(4, 7))}, ${parseInt(p1.color.slice(9, 12))}, ${parseInt(p1.color.slice(14, 17))}, ${1 - distance / connectionDistance})`
          ctx!.lineWidth = 1
          ctx!.beginPath()
          ctx!.moveTo(p1.x, p1.y)
          ctx!.lineTo(p2.x, p2.y)
          ctx!.stroke()
        }
      })
    }

    init()
    animate()

    const handleResize = () => {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />
}

