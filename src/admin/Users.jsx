import React, { useEffect, useState } from 'react'
import { Paper, Typography, CircularProgress } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { getUsers } from '../lib/api'

export default function Users() {
    const [users, setUsers] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const user_data = await getUsers()
                setUsers(user_data.data)
                setLoading(false)
            } catch (e) {
                // use nice toast notification in future
                alert(e.response.data)
            }
        }
        fetchData()
    }, [])

    const showDataGrid = () => {
        const sortModel = [
            {
              field: 'id',
              sort: 'asc',
            },
          ]
        const columns = Object.keys(users[0]).map( key => ({'field': key, 'width': 200 }))
        return (
            <DataGrid
                rows={users}
                sortModel={sortModel}
                columns={columns}
                autoHeight={true}
                disableExtendRowFullWidth={true}
                pageSize={10}
            />
        )
    }

    return (
        <Paper style={{ marginTop: 100, padding: 20, width: '100%'  }}>
            <Typography variant="h6"> Users </Typography> <br />
            {loading ? <CircularProgress />: showDataGrid()}
        </Paper>
    )
}