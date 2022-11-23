import Picture from '../images/SelfPhoto.jpg'

export default function AboutMe() {
    return (
        <section id="about">
            <div>
                <div style={{backgroundColor: 'lightblue'}}>
                    <section
                        style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: 'lightblue',
                            }}
                    >
                        <h2> My name is Charles Money</h2>
                        <img src={Picture} alt = "project" height="200" width="200"/>
                        <h3> I am a full stack web-developer who has completed a Georgia Tech Web Development Bootcamp course  </h3>                
                        <p> 
                            I like programming, chess, video games, and reading
                        </p>
                        <h4>My programming skills include</h4>
                    </section>
                    <ul style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        backgroundColor: 'gold'
                    }}>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            Javascript
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            HTML
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            CSS
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            React
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            Github
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            MySQL
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            MongoDB
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            Bootstrap
                        </li>
                        <li style={{
                        marginRight: '100px'
                    }}>
                            Express
                        </li>
                        <li>
                            C++
                        </li>
                    </ul>
                </div>
            </div>   
        </section>
    );
}