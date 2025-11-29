'use client';

import HeadcountChart from '@/components/charts/HeadcountChart';
import TenureChart from '@/components/charts/TenureChart';
import TurnoverRateChart from '@/components/charts/TurnoverRateChart';
import UserCard from '@/components/pages/user-cart';
import { ToggleButton } from '@/components/ui/ToggleButton';
import { useGetUsers } from '@/services/useGetWorker';
import React from 'react';
import { UserType } from '../utils/types';
import FadeLoader from '@/components/ui/FadeLoader';

const Dashboard = () => {
    const { data, isLoading } = useGetUsers();

    return (
        <div className={`min-h-screen p-8 transition-colors duration-300 bg-neutV-50`}>
            <div className="flex justify-between">
                <div className=""></div>
            <ToggleButton />
            </div>

            <h1 className='text-3xl font-bold mb-8 text-limeV-700'>
                HR Analytics Overview
            </h1>

            {/* Charts */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
                <TurnoverRateChart />
                <TenureChart />
                <HeadcountChart />
            </div>

            {/* Users List */}
            <div className="border border-neutV-300 dark:border-neutV-700 rounded-lg p-4 mt-4">
                <h2 className="text-2xl font-semibold mb-4 text-limeV-900">Users</h2>

                {isLoading && <FadeLoader/>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.map((user:UserType) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
