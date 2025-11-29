'use client';
import { MOCK_DATA, PRIMARY_COLOR } from '@/app/utils/dashboardData';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'; 
import { useTheme } from '@/context/theme-context';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TurnoverRateChart = () => {
    const { theme } = useTheme();
    const series = [{
        name: "Turnover Rate (%)",
        data: MOCK_DATA.turnover.map(d => d.rate),
    }];

    const options: ApexOptions = {
        theme: {
            mode: theme === 'dark' ? 'dark' : 'light', 
        },
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: { 
            curve: 'smooth', 
            width: 3 
        },
        xaxis: {
            categories: MOCK_DATA.turnover.map(d => d.month),
            labels: { style: { colors: '#777' } },
        },
        yaxis: {
            labels: { formatter: (val: number) => `${val.toFixed(1)}%` },
        },
        grid: { show: false },
        colors: [PRIMARY_COLOR],
        tooltip: { theme: 'light' }, 
    };

    return (
        <Chart 
            options={options} 
            series={series} 
            type="line" 
            height={200} 
        />
    );
};

export default TurnoverRateChart;