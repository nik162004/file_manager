function Navbar() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Files', path: '/files' },
        { name: 'Settings', path: '/settings' }
    ];

    return (
        <nav>
            <div>
                <p>Nik's</p>
                <h1>File Manager</h1>
            </div>
            <ul>
                {links.map((link) => (
                    <li key={link.name}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>
            <button href="/login">Login</button>
        </nav>
    )
}

export default Navbar