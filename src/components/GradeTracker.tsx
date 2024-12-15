'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function GradeTracker() {
  const [grades, setGrades] = useState([
    { id: 1, assignment: 'Homework 1', grade: 90 },
    { id: 2, assignment: 'Quiz 1', grade: 85 },
    { id: 3, assignment: 'Midterm Exam', grade: 88 },
  ])

  const [newGrade, setNewGrade] = useState({ assignment: '', grade: '' })

  const handleAddGrade = () => {
    if (newGrade.assignment && newGrade.grade) {
      setGrades([...grades, { id: grades.length + 1, ...newGrade, grade: parseInt(newGrade.grade) }])
      setNewGrade({ assignment: '', grade: '' })
    }
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assignment</TableHead>
            <TableHead>Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell>{grade.assignment}</TableCell>
              <TableCell>{grade.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex space-x-2">
        <Input
          placeholder="Assignment name"
          value={newGrade.assignment}
          onChange={(e) => setNewGrade({ ...newGrade, assignment: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Grade"
          value={newGrade.grade}
          onChange={(e) => setNewGrade({ ...newGrade, grade: e.target.value })}
        />
        <Button onClick={handleAddGrade}>Add Grade</Button>
      </div>
    </div>
  )
}

