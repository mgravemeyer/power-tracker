type DashboardProps = {
    data: any[]
}

export default function Dashboard({data}: DashboardProps) {

    console.log(data)

    return (
        <div className="w-screen my-20 flex flex-col justify-center items-center bg-gray-100">
            <div className='w-96 flex flex-col h-fit bg-gray-200'>
                <div className="flex justify-between bg-gray-700 rounded-tl-md rounded-tr-md py-2 px-6">
                    <p className="text-white text-lg">Zeit</p>
                    <p className="ml-8 text-white text-lg">Daten</p>
                </div>
                {data.map((element, index) => {
                    return <div className={`flex justify-between px-4 py-1 ${index === 0 ? 'pt-3' : ''} ${index === data.length - 1 ? 'pb-3' : ''}`}>
                        <p className="text-gray-700 text-lg">{element.time}</p>
                        <p className="ml-8 text-gray-700 text-lg">{element.value}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
