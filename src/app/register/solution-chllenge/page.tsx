// Page for Register Form

import { Button, Container, Box, Grid, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const page = () => {
	const prefix =[
		{
			value: 'นาย',
			label: 'นาย',
		  },
		  {
			value: 'นาง',
			label: 'นาง',
		  },
		  {
			value: 'นางสาว',
			label: 'นางสาว',
		  },
	]

	const grade =[
		{
			value:'มัธยมศึกษาปีที่ 4',
			label:'มัธยมศึกษาปีที่ 4'
		},
		{
			value:'มัธยมศึกษาปีที่ 5',
			label:'มัธยมศึกษาปีที่ 5'
		},
		{
			value:'มัธยมศึกษาปีที่ 6',
			label:'มัธยมศึกษาปีที่ 6'
		}
		
	]
  return (
    <div
      style={{
        padding: "40px",
      //  backgroundColor: "#505050",  
		minHeight: "100vh",
        height: "100%", 
        width: "100vw",
       // position: "relative",
      }}
    >
      <Button sx={{ color: "#fff" }}>
        <ArrowBackIosNewIcon />
        Back
      </Button>
      <Box sx={{ margin: "10px" }}>
        <h1 className="text-primary text-4xl" >แบบฟอร์มลงทะเบียน ICT Challenge 2023</h1>
      </Box>
    
        <Box
          sx={{
            minWidth: "70%",
            minHeight: "90%",
            borderRadius: "15px",
            backgroundColor: "#E1E1E1",
            position: "absolute",
            zIndex: 1,
          }}
        >
			<Box display={'flex'} justifyContent={'center'}></Box>
          <Box margin="30px" >
            <h1 className="text-primary text-3xl">โรงเรียน</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
               marginLeft: "35px",
            }}
          >
            <Grid container gap={'20px'}>
              <Grid
                xs={12}
                md={8}
                sx={{ display: "flex",  flexDirection:{xs:'column', md:'row'}}}
                gap={'30px'}
              >
              <TextField type="text" label="ชื่อทีม" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			  <TextField type="text" label="ชื่อโรงเรียน" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
              </Grid>
          
			  <Grid
                xs={12}
                md={8}
                sx={{ display: "flex", flexDirection: "row" }}
              > <TextField type="text" label="ที่อยู่โรงเรียน" required fullWidth multiline  rows={3} style={{backgroundColor: "#fff" ,borderRadius: "5px"}}  />
			  </Grid>
            </Grid>
          </Box>
		  <Box margin="30px">
            <h1 className="text-primary text-3xl">สมาชิกในทีม</h1>
			<Button variant="contained" sx={{width:'100px' ,height:'30px',paddingTop:'4px' ,borderRadius:'5px',margin:'10px 0 10px 0'}}>
				<h3 className="text-md" style={{textAlign:'center', color:'#fff'}}>คนที่ </h3>
			</Button>
			<h1 className="text-primary text-2xl">ข้อมูลส่วนตัว</h1>
          </Box>
		  <Box
            sx={{
              display: "flex",
              flexGrow: 1,
               marginLeft: "35px",
            }}
          >
			
            <Grid container  gap={'30px'}>
			<Grid
                xs={12}
                md={1.2}
                sx={{ display: "flex", flexDirection: "row" }}
				
              > <TextField type="text"  select label="คำนำหน้า" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}  />
			  </Grid>
              <Grid
                xs={12}
                md={6.6}
                sx={{ display: "flex",  flexDirection:{xs:'column', md:'row'}}}
                gap={'30px'}
              >
              <TextField type="text" label="ชื่อจริง" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			  <TextField type="text" label="นามสกุล" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
              </Grid>  
			  <Grid
                xs={12}
                md={4}
              
				
              > <TextField type="text"  select label="ระดับชั้นที่กำลังศึกษาอยู่" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}  />
			  </Grid>
            </Grid>
			
			
          </Box>
		  <Box margin={'30px'}><h1 className="text-primary text-2xl">ช่องทางการติดต่อ</h1>
          </Box>
		  <Box
            sx={{
              display: "flex",
              flexGrow: 1,
               marginLeft: "35px",
            }}
          >
			
		  <Grid container  gap={'30px'}>
		  <Grid
                xs={12}
                md={8}
				sx={{ display: "flex",  flexDirection:{xs:'column', md:'row'}}}
                gap={'30px'}
              >
              <TextField type="text" label="เบอร์โทรศัพท์ " required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			  <TextField type="text" label="Email (Gmail เท่านั้น)" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
              </Grid>
			  <Grid
                xs={12}
                md={8}
				sx={{ display: "flex",  flexDirection:{xs:'column', md:'row'}}}
                gap={'30px'}
              >
              <TextField type="text" label="Facebook (ไม่บังคับ) "  fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			  <TextField type="text" label="Line ID (ไม่บังคับ)"  fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
              </Grid>
			  
			  </Grid>
</Box>


		  <Box margin="30px">
            <h1 className="text-primary text-3xl">อาจาร์ที่ปรึกษาทีม</h1>
          </Box>
		  <Box
            sx={{
              display: "flex",
              flexGrow: 1,
               marginLeft: "35px",
            }}
          >
			
            <Grid container  gap={'30px'} marginBottom={'20px'}>
			<Grid
                xs={12}
                md={1.2}
                sx={{ display: "flex", flexDirection: "row" }}
				
              > <TextField type="text"  select label="คำนำหน้า" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}  />
			  </Grid>
              <Grid
                xs={12}
                md={6.6}
                sx={{ display: "flex",  flexDirection:{xs:'column', md:'row'}}}
                gap={'30px'}
              >
              <TextField type="text" label="ชื่อจริง" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			  <TextField type="text" label="นามสกุล" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
              </Grid>  
			  <Grid
                xs={12}
                md={8}
				sx={{ display: "flex",  flexDirection:{xs:'column', md:'row'}}}
                gap={'30px'}
              >
              <TextField type="text" label="เบอร์โทรศัพท์ " required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			  <TextField type="text" label="Email (Gmail เท่านั้น)" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
              </Grid>
			  <Grid
                xs={12}
                md={8}
                gap={'30px'}
              >
              <TextField type="text" label="กลุ่มสาระการเรียนรู้ที่สังกัด หรือตําแหน่งปัจจุบัน" required fullWidth style={{backgroundColor: "#fff" ,borderRadius: "5px"}}/>
			 
              </Grid>
            </Grid>
				
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            minWidth:{md:"84%" , xs:"70%"} ,
			//neng kub responsive pls🥺
            minHeight: { md: "150%", xs: "280%" },
            borderRadius: "15px",
            backgroundColor: "#3399CC",
            position: "absolute",
            zIndex: 0,
          }}
        ></Box>
		<Box >
			** กรุณาตรวจสอบความถูกต้องให้ครบถ้วนก่อนกดยืนยัน หากกดยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลการสมัครได้
		</Box>
     
    </div>
  );
};

export default page;
