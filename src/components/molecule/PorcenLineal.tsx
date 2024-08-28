import { MeterGroup } from 'primereact/metergroup';

export default function PorcenLineal() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 24 },
        { label: 'Messages', color: '#fbbf24', value: 16 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 16 },
        { label: 'Prueba', color: '#22D3EE', value: 15},
        { label: 'Alto', color: '#92446D', value: 5}
    ];

    return (
            <MeterGroup values={values} labelPosition="start" labelOrientation="vertical" />
    )
}
        