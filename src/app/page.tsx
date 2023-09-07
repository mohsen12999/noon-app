import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import styles from './page.module.css'

import { IProductGroup, PRODUCT_GROUPS } from "../helper/data";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="md">
      <Grid
        className={styles.grid}
        container
        spacing={3}
        // justify="space-around"
        alignItems="stretch"
      >
        {PRODUCT_GROUPS.map((group: IProductGroup) => (
          <Grid
            className={styles.littleGrid}
            key={group.id}
            item
            xs={12}
            sm={6}
          >
            <Link href={group.enable? ("/market/"+group.id) :"/soon"} className='noTextDecoration'>

              <Card className={styles.card}>
                <CardMedia
                  className={group.enable? styles.cover:styles.disableCover }
                  image={group.img}
                  title={group.persianSubtitle}
                />

                <div className={styles.details}>
                  <CardContent className={styles.content}>
                    <Typography
                      className="YekanFont"
                      component="h5"
                      variant="h5"
                    >
                      {group.persianTitle}
                    </Typography>
                    <Typography
                      className="YekanFont"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {group.persianSubtitle}
                    </Typography>
                  </CardContent>
                </div>
              </Card>

            </Link>

          </Grid>
        ))}
      </Grid>
      </Container>
    </main>
  )
}
