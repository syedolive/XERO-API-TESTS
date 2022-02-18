let consentUrl = await xero.buildConsentUrl();
  res.redirect(consentUrl);
  try{
    const tokenSet = await xero.getClientCredentialsToken();
    await xero.setTokenSet(tokenSet);
    const xeroTenantId = 'YOUR_XERO_TENANT_ID';
    const summarizeErrors = false;
    const unitdp = 4;
    const dateValue = '2021-11-18'
    const dueDateValue = '2021-11-20'

    const contact = { 
      name: "Syed Faizan"
    }; 
    const lineItemTrackings = [{ 
      trackingCategoryID: "00000000-0000-0000-0000-000000000000",
      trackingOptionID: "00000000-0000-0000-0000-000000000000"
    }];
    const lineItems = [{ 
      description: "WEb Development",
      quantity: 1.0,
      unitAmount: 20.0,
      accountCode: "000",
      tracking: lineItemTrackings
    }];
    const invoice = { 
      type: Invoice.TypeEnum.ACCREC,
      contact: contact,
      date: dateValue,
      dueDate: dueDateValue,
      lineItems: lineItems,
      reference: "Fossphorus Invoice",
      status: Invoice.StatusEnum.DRAFT
    }; 

    const invoices = {  
      invoices: [invoice]
    }; 

    try {
      const response = await xero.accountingApi.createInvoices("", invoices,  summarizeErrors, unitdp);
      console.log(response.body || response.response.statusCode)
    } catch (err) {
      const error = JSON.stringify(err.response.body, null, 2)
      console.log(`Status Code: ${err.response.statusCode} => ${error}`);
    }
    const xeroTenantId = 'YOUR_XERO_TENANT_ID';
    const summarizeErrors = false;
    const dateValue = '2021-11-18'

    const contact = { 
      name: "Syed Faizan"
    }; 
    const lineItems = [{ 
      description: "Fossphorus Test Purchase Order Created from API",
      quantity: 1.0,
      unitAmount: 20.0,
      accountCode: "000"
    }];

    const purchaseOrder = { 
      contact: contact,
      lineItems: lineItems,
      date: dateValue
    }; 

    const purchaseOrders = {  
      purchaseOrders: [purchaseOrder]
    }; 

    try {
      const response = await xero.accountingApi.createPurchaseOrders("", purchaseOrders,  summarizeErrors);
      console.log(response.body || response.response.statusCode)
    } catch (err) {
      const error = JSON.stringify(err.response.body, null, 2)
      console.log(`Status Code: ${err.response.statusCode} => ${error}`);
    }
  }catch(e){
    res.send(e)
  }