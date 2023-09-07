import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

import styles from './page.module.css'

export default function Soon() {
    return (
        <Container maxWidth="sm">
            <Paper className={styles.paper}>
                <Typography className={styles.text} variant="h5" component="h3">
                    این بخش در حال ساخت می باشد.
                </Typography>
                <Typography className={styles.text} component="p">
                    به زودی این بخش ساخته می شود و در دسترس قرار می گیرد
                </Typography>
                <Link href='/'>
                    <Button
                        variant="contained"
                        color="primary"
                        //className={classes.btn}
                    >
                        بازگشت به صفحه اصلی
                    </Button>
                </Link>
            </Paper>
        </Container>
    )
}