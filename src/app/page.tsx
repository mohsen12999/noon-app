import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { GROUPS } from '@/helper/data';
import { IGroup } from '@/helper/interfaces';

import styles from './page.module.css'

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
          {GROUPS.map((group: IGroup) => (
            <Grid
              className={styles.littleGrid}
              key={group.id}
              item
              xs={12}
              sm={6}
            >
              <Link href={group.enabled ? ("/" + group.id) : "/soon"} className='noTextDecoration'>

                <Card className={styles.card}>
                  <CardMedia
                    className={group.enabled ? styles.cover : styles.disableCover}
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
