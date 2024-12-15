"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, Calendar, Settings, Package2, Bell, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  // { href: "/course", label: "Courses", icon: Book },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/settings", label: "Settings", icon: Settings },
];

type Course = {
  id: string;
  name: string;
}
export function Sidebar() {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Mathematics 101' },
    { id: '2', name: 'History 202' },
    { id: '3', name: 'Computer Science 303' },
  ])
  const isActive = (path: string) => pathname === path
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Google Class</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="p-4">
        <Button className="w-full justify-start" asChild>
          <Link href="/create-course">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Class
          </Link>
        </Button>
      </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-blue-600",
                    isActive ? "bg-muted text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
             <div className="pt-4">
            <h3 className="mb-2 px-2 text-sm font-semibold text-gray-500">Enrolled</h3>
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.id}`}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(`/course/${course.id}`) ? 'bg-gray-200 text-blue-600' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                <Book size={20} />
                <span className="truncate">{course.name}</span>
              </Link>
            ))}
          </div>
          </nav>
        </div>
        
      </div>
    </div>
  );
}
