import React from 'react'
import { Card, CardContent, Grid, TextField } from '@material-ui/core'

export default function UserForm({ formData, handleFormDataChange }) {
  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date of bir1h"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleFormDataChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3>Address</h3>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Address 1"
                name="street"
                value={formData.street}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Address 2"
                name="street2"
                value={formData.street2}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="ZIP"
                name="zip"
                value={formData.zip}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleFormDataChange}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}
