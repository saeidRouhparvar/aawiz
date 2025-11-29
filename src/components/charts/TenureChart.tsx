'use client';
import { MOCK_DATA, PRIMARY_COLOR, MAX_TENURE_YEARS } from '@/app/utils/dashboardData';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { useTheme } from '@/context/theme-context';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TenureChart = () => {
    const { theme } = useTheme();
    const tenurePercentage = (MOCK_DATA.averageTenure / MAX_TENURE_YEARS) * 100;
    const series = [Math.round(tenurePercentage)]; 

    const options: ApexOptions = {
        theme: {
            mode: theme === 'dark' ? 'dark' : 'light', 
        },
        chart: { 
            type: 'radialBar',
            sparkline: { enabled: true } 
        },
        plotOptions: {
            radialBar: {
                hollow: { size: '70%' },
                dataLabels: {
                    name: { 
                        show: false 
                    },
                    value: {
                        show: true,
                        formatter: () => `${MOCK_DATA.averageTenure.toFixed(1)} Yrs`,
                        color: PRIMARY_COLOR,
                        fontSize: '28px',
                        offsetY: 8,
                        fontWeight: 600
                    },
                },
                track: { 
                    background: '#e0f7fa', 
                    margin: 15 
                } 
            },
        },
        labels: ['Average Tenure'], 
        colors: [PRIMARY_COLOR],
        stroke: { lineCap: 'round' }
    };

    return (
        <Chart 
            options={options} 
            series={series} 
            type="radialBar" 
            height={200} 
        />
    );
};

export default TenureChart;