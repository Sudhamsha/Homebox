import React from 'react'
import { Paper, Typography } from '@material-ui/core'

export default function Landing() {
    return (
        <Paper style={{ marginTop: 100, padding: 20 }}>
            <Typography variant="h6"> Landing Page </Typography>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin cursus sit amet arcu ac imperdiet. Etiam a dignissim justo. 
                Donec at mattis purus. Mauris ac ligula sem. Duis quis sem at urna tincidunt tempor. 
                Integer hendrerit nisl ac tellus pellentesque tempus. Aliquam a feugiat leo, vitae blandit enim. 
                Duis sed euismod mauris. Nulla a iaculis metus.
            </p>

            <p> 
                Duis at suscipit justo. Vestibulum ante ipsum primis in faucibus orci 
                luctus et ultrices posuere cubilia curae; Nulla facilisi. 
                Integer non varius turpis, quis malesuada nisl. Aliquam erat volutpat. 
                Proin vel consectetur metus. Curabitur sollicitudin ultrices elementum. 
                Vestibulum luctus lorem id justo ullamcorper, ut sodales odio pharetra. 
                Proin in augue non lorem convallis fringilla. Aliquam erat volutpat. 
                Praesent luctus viverra sem a mollis. Aliquam turpis dolor, vulputate vitae sem id, mollis molestie magna. 
                Nulla at elit velit. Proin orci enim, consequat sit amet diam in, elementum dignissim lorem.
            </p>
        </Paper>
    )
}