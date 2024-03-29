import React, { Component } from 'react'
import './yourAccount.css'
import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { Box, Card, CardContent, Divider, Grid, TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import CustomButton from '../utils/customButton'
import Title from '../utils/Title'
import { withStyles } from '@material-ui/core/styles'
import { clientApi, accessApi, newsletterApi } from '../../api'
import Cookies from 'universal-cookie'
import camelCaseKeysToUnderscore from '../utils/api/camelCaseKeysToUnderscore'
import { ClientAccessSchema } from '../../api/src'
import { stringToBolean } from '../utils/boolean'

const useStyles = theme => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        borderRadius: BORDER_RADIUS_10PX,
        paddingRight: '15px',
        paddingLeft: '15px',
    },
    finalBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
    },
    switch: {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: COLOR_BDAZZLED_BLUE,
        },
        '& .MuiSwitch-switchBase.Mui-checked.MuiSwitch-track': {
            backgroundColor: COLOR_SHADOW_BLUE,
        },
        padding: '12px',
    }
})

class Privacidade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: null,
            emailClient: null,
            password: null,
            isLoaded: false,
            oauth: false,
            defaultSwitchValue: false,
        }
    }

    componentDidMount() {
        let clientId = new Cookies().get('clientID')
        let emailClient = new Cookies().get('clientEmail')
        let oauth = new Cookies().get("clientOAuth")

        oauth = stringToBolean(oauth)

        if (clientId === undefined || clientId === null)
            return

        if (emailClient === undefined || emailClient === null)
            return

        if (oauth === undefined || oauth === null)
            return

        let defaultSwitchValue = false
        newsletterApi.newsletterGet({ email: emailClient }, (error, data, response) => {
            if (error) {
                defaultSwitchValue = false
            } else {
                if (response.statusCode === 200) {
                    defaultSwitchValue = true
                }
            }
        })

        clientApi.clientGet({ id: clientId }, (error, data) => {
            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                client: data[0],
                emailClient: emailClient,
                oauth: oauth,
                defaultSwitchValue: defaultSwitchValue,
            })
        })
    }

    updateClient() {
        let body = new ClientAccessSchema(this.state.oauth, this.state.emailClient)
        body.emailClient = this.state.emailClient
        body.password = this.state.password

        if (this.state.client == null)
            return
        let obj = camelCaseKeysToUnderscore(this.state.client)
        accessApi.accessPut(body, obj.id, (error, data) => {
            let cookie = new Cookies()
            cookie.set("clientEmail", body.emailClient, { path: '/' })
            cookie.set("clientID", obj.id, { path: '/' })

            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }
        })

        if (this.state.defaultSwitchValue === true)
            newsletterApi.newsletterPost(this.state.emailClient, null)
        else
            newsletterApi.newsletterDelete(this.state.emailClient, null)
    }

    render() {
        const { classes } = this.props
        const { isLoaded, emailClient, oauth, defaultSwitchValue } = this.state

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <form autoComplete="off">
                <Card className={classes.container}>
                    <Title
                        name={'Privacidade'}
                        color={COLOR_BDAZZLED_BLUE} />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    value={emailClient}
                                    onChange={e => this.setState({
                                        emailClient: e.target.value
                                    })}
                                    fullWidth
                                    label="E-mail"
                                    name="E-mail"
                                    required
                                    variant="outlined"
                                    type="email" />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    onChange={e => this.setState({
                                        password: e.target.value
                                    })}
                                    label="Password"
                                    name="Password"
                                    type="password"
                                    disabled={oauth}
                                    variant="outlined" />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControlLabel
                                    className={classes.switch}
                                    control=
                                    {<Switch
                                        checked={defaultSwitchValue}
                                        onChange={e => this.setState({
                                            defaultSwitchValue: e.target.checked
                                        })}
                                    />
                                    }
                                    label="Subscrição newsletter"
                                    labelPlacement="start" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Box className={classes.finalBox}>
                        <CustomButton
                            onClick={e => this.updateClient()}
                            name={"Guardar alterações"} />
                    </Box>
                </Card>
            </form>
        )
    }
}

export default withStyles(useStyles)(Privacidade)