import { Loader2 } from 'lucide-react';
const Icons = {
    spinner: Loader2,
};

export default function Preloader() {
    return (
        <div className='grid place-items-center h-[100vh]'>
            <div className='flex items-center content-center flex-col'>
                <Icons.spinner className="h-24 w-24 animate-spin" />
                <h2>Loading Please Wait....</h2>
            </div>
        </div>
    )
}
