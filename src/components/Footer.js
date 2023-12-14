export default function Footer({appInfo}){
    return (
        <footer style={ {margin: 20} }>
            <small>Last Updated: {appInfo.updated} - Ver: {appInfo.version}</small>
        </footer>
    )
}