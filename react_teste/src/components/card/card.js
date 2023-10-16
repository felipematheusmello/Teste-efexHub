import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContainerCardAlignCenter, EditIconAlignEnd, HoverDiv } from './card.style';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


function BasicCard({ title='test', description='test', status=true, onEdit= () => {} }) {
  return (
    <ContainerCardAlignCenter>
        <Card sx={{ minWidth: 275, mb: 2.3 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                <EditIconAlignEnd>
                {title}
                    <HoverDiv onClick={onEdit}>
                        <CreateOutlinedIcon fontSize="medium"></CreateOutlinedIcon>
                    </HoverDiv>
                </EditIconAlignEnd>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
            </Typography>
            <Typography variant="body2">
            { status ? '🟢 Completed Task': '🟡 In Progress'}
            </Typography>
        </CardContent>
        </Card>
    </ContainerCardAlignCenter>
  );
}

export default BasicCard