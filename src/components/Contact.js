import React from 'react'
import { Box, FormControl, InputLabel, Input, FormHelperText, makeStyles, Button } from '@material-ui/core'
import { useForm } from "react-hook-form";



const useStyles = makeStyles({
    root: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'

    }
})




function Contact() {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        // handleSubmit" will validate your inputs before invoking "onSubmit"  

        < form onSubmit={handleSubmit(onSubmit)} >
            <Box className={classes.root}>
                <FormControl>
                    <InputLabel htmlFor='name'>name</InputLabel>
                    <Input
                        inputRef={register({
                            required: 'Required !',
                            minLength: {
                                value: 3,
                                message: 'too short for a name dude !'
                            },
                            pattern: {
                                value: /^[a-zA-Z]+(([/',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
                                message: "that's not even a name dude !"
                            }
                        })}
                        name='name' type='name' aria-describedby='name-helper' />
                    <FormHelperText error={errors.name && true} id='name-helper'>{errors.name ? errors.name.message : "What should i call you "} </FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor='email'>email</InputLabel>
                    <Input  inputRef={register({required: 'Required !' })} name='email' type='email' aria-describedby='email-helper' />
                    <FormHelperText error={errors.email && true} id='email-helper'> {errors.email ? errors.email.message :"Put the email you want me to text you on" }  </FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor='message'>message</InputLabel>
                    <Input multiline={true} inputRef={register({
                         required: 'Required !',
                          minLength: {value:50,message:'come on leave me meaningful message atleast 50'} })} name='message' type='message' aria-describedby='message-helper' />
                    <FormHelperText error={errors.message && true} id='message-helper'>{errors.message ? errors.message.message : "Be comfortable to ask about anything"}    </FormHelperText>
                </FormControl>

                <Button type="submit" variant='contained' color='secondary'>send</Button>
            </Box>
        </form >
    )
}

export default Contact
