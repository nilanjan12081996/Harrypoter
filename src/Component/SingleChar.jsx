import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleChar } from "../Redux/SingleCharSlice"
import { Paper, Skeleton, Typography } from "@mui/material"
import { Alert } from "@mui/joy"

const SingleChar=()=>{
    const{id}=useParams()
    const{singleChar,loading,error}=useSelector((state)=>state?.sing)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getSingleChar(id))
    },[dispatch,id])
    return(
        <>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        {
            error?(
            <>
            <Alert variant="soft" size="lg" color="danger">Something Went Wrong</Alert>
            </>):(
                <>
                {
                    loading?(
                        <>
                            
                       <Paper elevation={10} sx={{height:700,width:600,marginTop:5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                            <Skeleton animation="wave" variant="rect" height={'400px'} width={'250px'}/>
                                                            <Skeleton animation="wave" variant="text" height={30} width={90}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                            <Skeleton animation="wave" variant="text" height={20} width={50}/>
                                                        </Paper>
                        </>
                    ):(
                        <>
                        {
                            singleChar?.map((harry)=>{
                                return(
                                    <>
                                    <Paper elevation={10} sx={{height:700,width:600,marginTop:5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <center>   <img style={{
                                                                marginTop:5,border:'2px solid black'
                                                            }}  src={`${harry.image}`} alt="Harry Potter" height={'400px'} width={'300px'}/></center> 
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h4">Name:{harry?.name}</Typography>
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h5">Actor:{harry?.actor}</Typography>
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h5">DOB:{harry?.dateOfBirth}</Typography>
                                                                    <Typography style={{ fontFamily: 'HarryPFont'}} sx={{textAlign:'center'}} variant="h5">Species:{harry?.species}</Typography>
                                                                    </Paper>
                                    </>
                                )
                            })
                        }
                        </>
                    )
                }
                </>
            )
        }
        </div>
         </>
    )
}
export default SingleChar