import AppCard from "../containers/home/AppCard"

export default function Home(props) {
    return (
        <div className="home-main">
            <AppCard title="SKU Manager" className="sku" sku released {...props} />
            <AppCard title="In Development" development/>
            <AppCard color="rgb(168, 148, 212)" suggestion/>
        </div>
    )
}