import AppCard from "../comps/home/AppCard"

export default function Home() {
    return (
        <div className="home-main">
            <AppCard title="SKU Manager" color="rgb(253, 253, 150)" released/>
            <AppCard title="In Development" color="rgb(227, 93, 89)" development/>
            <AppCard color="rgb(168, 148, 212)" suggestion/>
        </div>
    )
}