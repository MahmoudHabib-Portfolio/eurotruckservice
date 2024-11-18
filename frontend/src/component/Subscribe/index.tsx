import Styles from "./style.module.scss";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect, useRef } from "react";
import { onSubscribe } from "../../functions/animate";
import { useTranslation } from "react-i18next";

/* Name_Field */
const NameField = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "0px"
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
        borderWidth: '0rem'
      }
    },
  });

/* phone_Field */
const PhoneField = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "0px"
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
        borderWidth: '0rem'
      }
    },
  });

const Subscribe = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const getSubCont = useRef(null);
    const getSub = useRef(null);
    const {t} = useTranslation();
    useEffect(() => {
        onSubscribe(getSub.current ,getSubCont.current);
    }, []);

    const onSubmit = (e:any) => {
        e.preventDefault();

    }

  return (
    <div className={Styles.serviceCont} ref={getSub}>
        <div className={Styles.subscribeCont} ref={getSubCont}>
            <div>
            <h1>{t('InquiryFormHead')}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <div className={Styles.subscribForm}>
                        <div>
                        <NameField 
                            fullWidth
                            value={name}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "0rem",
                                    borderStyle: "solid",
                                    borderColor: '#fff'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: "#fff"
                                },
                                }
                            }}
                            inputProps={{
                                sx: {
                                color: '#979797',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                backgroundColor:'rgba(71, 98, 255, 0.08)',
                                padding:'11px 12px',
                                "&::placeholder":{
                                    opacity: 1
                                    }
                                },
                                }}
                                placeholder={t('InquiryInputOne')}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                />
                        </div>
                        <div>
                        <PhoneField
                            fullWidth
                            value={phone}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "0rem",
                                    borderStyle: "solid",
                                    borderColor: '#fff'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: "#fff"
                                },
                                }
                            }}
                            inputProps={{
                                sx: {
                                color: '#979797',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                backgroundColor:'rgba(71, 98, 255, 0.08)',
                                padding:'11px 12px',
                                "&::placeholder":{
                                    opacity: 1
                                    }
                                },
                                }}
                                placeholder={t('InquiryInputTwo')}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                />
                        </div>
                        <div style={{width:"100%"}}>
                            <Button
                            sx={{
                                background:"#4762FF",
                                borderRadius:"8px",
                                textAlign:"center",
                                letterSpacing:"1px",
                                width:"100%",
                                color:"#fff",
                                textTransform:"unset",
                                fontSize:"16px",
                                fontWeight:"bold",
                                padding: "1em",
                                marginTop:"1em",
                                "&:hover":{
                                    background:"#4762FF"
                                }
                            }}
                            className={Styles.sendButtn}
                            aria-label="Send a Service Request">
                            {t('SendButton')}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;