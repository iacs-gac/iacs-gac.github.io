import { Menu, Box, Text } from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons'
import { useNavigate } from 'react-router-dom';

 
import react from 'react'

export function MenuUpperRight() {
    const navigate = useNavigate();

    return <div style={{ position: 'absolute', right: 0 }}>
        <Box align="center" >
            <Menu
                items={[
                    {
                        label: <Text size='large'>Home</Text>, 
                        onClick:()=>{
                            navigate('/')
                        }
                    },
                    {
                       label: <Text size='large'>About</Text>, 
                        onClick:()=>{
                            navigate('/about')
                        }
                    },
                    {
                        label: <Text size='large'>Calendar and Events</Text>, 
                        onClick:()=>{
                            navigate('/calendar')
                        }
                    },
                    {
                        label: <Text size='large'>Contact Us</Text>, 
                        onClick:()=>{
                            navigate('/contact')
                        }
                    },
                ]}
            >
                <Box direction="row" gap="small" style={{ background: 'black', color: 'white' }} pad={'small'}>
                    <MenuIcon color='white' />
                    <Text size='medium'>Menu</Text>
                </Box>
            </Menu>
        </Box>

    </div>
}