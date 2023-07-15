import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import MainLayout from "@/layout/layout";
import Box from "@mui/material/Box";



const Page: NextPageWithLayout = () => {
  return <Box>Main Page</Box>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
        <MainLayout>{page}</MainLayout>
  )
}
export default Page








