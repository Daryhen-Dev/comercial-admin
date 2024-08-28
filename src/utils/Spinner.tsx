import { ProgressSpinner } from 'primereact/progressspinner';

interface IState {
    state: boolean;
}

export const Spinner = ({state}: IState) => {
    return (
        state ? (
            <div className="card flex justify-content-center">
                <ProgressSpinner />
            </div>
        ) : null
    );
}