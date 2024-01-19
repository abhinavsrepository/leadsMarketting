import DashboardNavBar from "@/components/Dashboard"
export default function DashboardLayout({
    children,
}:{
    children:React.ReactNode

}){
    return(
    <div className="flex flex-col h-full w-full">
        <DashboardNavBar/>    
        {children}
        </div>
    )
}