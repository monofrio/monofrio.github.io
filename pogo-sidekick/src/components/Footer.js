export default function Footer({appInfo}){
    return (
        <small>Last Updated: {appInfo.updated} - Ver: {appInfo.version}</small>
    )
}