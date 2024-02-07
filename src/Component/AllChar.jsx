import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllChar } from "../Redux/AllcharSlice"
import {  Button, Pagination, Paper, Skeleton, Typography } from "@mui/material"
import Grid from '@mui/joy/Grid';
import Alert from '@mui/joy/Alert';
import './style.css';
import { Link } from "react-router-dom";



const AllChar = () => {
    const { allChar, loading, error } = useSelector((state) => state?.chars)
    const [currentPage, setCurrentPage] = useState(1);
  
   
    const PAGE_SIZE = 4;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllChar())
    },[dispatch])
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
      };
    
      const indexOfLastChar = currentPage * PAGE_SIZE;
      const indexOfFirstChar = indexOfLastChar - PAGE_SIZE;
      const currentChars = allChar?.slice(indexOfFirstChar, indexOfLastChar);
    
      
    return (
        <>
            {
                error ? (
                    <>
                        <Alert variant="soft" size="lg" color="danger">Something Went Wrong</Alert>
                    </>

                ) : (
                    <>
                        {
                            loading ? (
                                <>
                                 <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                    {
                                       
                                        [1, 2, 3, 4].map((x) => {
                                            return (
                                                <>
                                                    
                                                        <Grid key={x}>
                                                            
                                                            <Paper sx={{height:500,width:300,marginTop:5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                            <Skeleton animation="wave" variant="rect" height={'200px'} width={'190px'}/>
                                                            <Skeleton animation="wave" variant="text" height={24} width={90}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={10} width={50}/>
                                                        </Paper>

                                                            </Grid>
                                                        
                                                        
                                                 

                                                </>
                                            )
                                        })
                                      
                                    }
                                      </Grid>
                                </>
                            ) : (
                                <>
                                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                {
                                    currentChars?.map((harry,x)=>{
                                        return(
                                            <>
                                             
                                                        <Grid key={x}>
                                                         
                                                            <Paper elevation={10} sx={{height:500,width:300,marginTop:5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                            <center>   <img style={{
                                                                marginTop:5,border:'2px solid black'
                                                            }}  src={`${harry.image}`} alt="Harry Potter" height={'200px'} width={'190px'}/></center> 
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h4">Name:{harry?.name}</Typography>
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h5">Actor:{harry?.actor}</Typography>
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h5">DOB:{harry?.dateOfBirth}</Typography>
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h5">Species:{harry?.species}</Typography>
                                                            <Link to={`/single/${harry?.id}`}> <Button sx={{marginTop:5, alignSelf:"center"}} variant="contained">Read More</Button></Link>       
                                                            </Paper>

                                                           
                                                        </Grid>
                                                        
                                                    
                                            </>
                                        )
                                    })                               
                                     }
                                     </Grid>
                                     <Pagination
                count={Math.ceil(allChar?.length / PAGE_SIZE)}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                sx={{ marginTop: 2, textAlign: 'center' ,display:'flex',justifyContent:'center',alignItems:'center'}}
              />
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    )
}
export default AllChar