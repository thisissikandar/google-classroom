"use client"
import Link from 'next/link'
import { Home, ShoppingCart, Package, Users, LineChart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/orders', label: 'Orders', icon: ShoppingCart, badge: '6' },
    { href: '/products', label: 'Products', icon: Package },
    { href: '/customers', label: 'Customers', icon: Users },
    { href: '/analytics', label: 'Analytics', icon: LineChart },
  ]

  return (
    <nav className="grid gap-2 text-lg font-medium">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
              isActive
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
            {item.badge && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {item.badge}
              </Badge>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

