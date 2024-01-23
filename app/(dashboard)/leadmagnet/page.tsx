import React from 'react'
import {auth} from '@clerck/nextjs'

function LeadMagnetsPage() {
    const {userId} =auth ()
    
    if (!userId) return <div>No User Found...</div>

const leadMagnetsRequest = getLeadMagnets(userId)
const leadsRequest = getLeads (userId);

const [leadMagnets,leads] =await Promise.all([
leadMagnetsRequest,
leadsRequest
]),
return <div>IrisLeadMagnetsPage</div>



export default LeadMagnetsPage