// components/charts/HeadcountChart.tsx
'use client';
import { MOCK_DATA, PRIMARY_COLOR } from '@/app/utils/dashboardData';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'; 
import { useTheme } from '@/context/theme-context';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HeadcountChart = () => {
    const { theme } = useTheme();
    const series = [{
        name: "Headcount",
        data: MOCK_DATA.headcount.map(d => d.count),
    }];

    const options: ApexOptions = {
        theme: {
            mode: theme === 'dark' ? 'dark' : 'light', 
        },
        chart: { 
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                borderRadius: 4,
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: MOCK_DATA.headcount.map(d => d.dept),
            labels: { style: { colors: '#777' } },
        },
        yaxis: { 
            show: false 
        },
        grid: { 
            show: false 
        },
        colors: [PRIMARY_COLOR],
        tooltip: { theme: 'light' },
    };

    return (
        <Chart 
            options={options} 
            series={series} 
            type="bar" 
            height={200} 
        />
    );
};

export default HeadcountChart;