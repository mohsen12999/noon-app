import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import styles from './page.module.css'

import { MARKETS } from "@/helper/data";
import { IMarket } from "@/helper/interfaces";

export default function Page({ params }: { params: { id: string } }) {

  const markets = MARKETS.filter(m => m.groups_id.toString() == params.id)
  return (
    <Container maxWidth="md">
      <Grid
      className={styles.grid}
      container
      spacing={3}
      alignItems="stretch"
      >
        {markets.map((market: IMarket) => (
          <Grid
            className={styles.littleGrid}
            key={market.id}
            item
            xs={12}
            sm={6}
            // onClick={() =>
            //   prop.changePage(
            //     market.enabled
            //       ? "/" +
            //       AppPages.PRODUCT +
            //       "/" +
            //       market.id +
            //       "/" +
            //       market.title
            //       : "/" + AppPages.SOON
            //   )
            // }
          >
            {/* <MarketCart
              title={market.persianTitle}
              subtitle={market.persianSubtitle}
              img={market.img}
              open={market.isOpen}
              address={market.address}
              discount={market.discount}
              freeDeliver={market.freeDeliver}
            /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}