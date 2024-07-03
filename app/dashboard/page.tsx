import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import EmployeeStats from './components/employees/employees-stats'
import TeamsStats from './components/teams/teams-stats'

function DashboardPage() {
    return (
        <Tabs defaultValue='employees'>
            <TabsList className='mb-4'>
                <TabsTrigger value="employees">
                    Employees stats
                </TabsTrigger>
                <TabsTrigger value="teams">
                    Teams stats
                </TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
                <EmployeeStats />
            </TabsContent>
            <TabsContent value="teams">
                <TeamsStats />
            </TabsContent>
        </Tabs>
    )
}

export default DashboardPage