import * as clientsAPI from "./tempClientService";

export const invoicesDB = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    invNbr: 1,
    clientId: "5b21ca3eeb7f6fbccd471818",
    clientName: "Company A",
    totalAmount: 100,
    status: true,
    date: 1186196647503,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    invNbr: 2,
    clientId: "5b21ca3eeb7f6fbccd471814",
    clientName: "Company B",
    totalAmount: 200,
    status: false,
    date: 1286196705016,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    invNbr: 3,
    clientId: "5b21ca3eeb7f6fbccd471815",
    clientName: "Company C",
    totalAmount: 50,
    status: false,
    date: 1386196647403,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    invNbr: 4,
    clientId: "5b21ca3eeb7f6fbccd471832",
    clientName: "Company D",
    totalAmount: 250,
    status: false,
    date: 1486196647403,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    invNbr: 5,
    clientId: "5b21ca3eeb7f6fbccd471818",
    clientName: "Company A",
    totalAmount: 80,
    status: false,
    date: 1496196647403,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    invNbr: 6,
    clientId: "5b21ca3eeb7f6fbccd471814",
    clientName: "Company B",
    totalAmount: 220,
    status: false,
    date: 1506196705016,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    invNbr: 7,
    clientId: "5b21ca3eeb7f6fbccd471815",
    clientName: "Company C",
    totalAmount: 90,
    status: true,
    date: 1516196647403,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    invNbr: 8,
    clientId: "5b21ca3eeb7f6fbccd471832",
    clientName: "Company D",
    totalAmount: 1300,
    status: true,
    date: 1551196705016,
  },
  {
    _id: "5b21ca3eeb7f6fbccd341765",
    invNbr: 9,
    clientId: "5b21ca3eeb7f6fbccd471818",
    clientName: "Company A",
    totalAmount: 110,
    status: true,
    date: 1586196767503,
  },
];

export function getInvoices() {
  return invoicesDB;
}

export function getInvoice(id) {
  return invoicesDB.find(i => i._id === id);
}

export function saveInvoice(invoice) {
  let invoiceInDb = invoicesDB.find(i => i._id === invoice._id) || {};
  invoiceInDb.invNbr = invoice.invNbr;
  invoiceInDb.clientId = invoice.clientId;
  invoiceInDb.clientName = clientsAPI.clients.find(client => client._id === invoice.clientId).name;
  invoiceInDb.totalAmount = invoice.totalAmount;
  invoiceInDb.status = invoice.status || false;
  invoiceInDb.date = invoice.date;

  if (!invoiceInDb._id) {
    invoiceInDb._id = Date.now().toString();
    invoicesDB.push(invoiceInDb);
  }

  return invoiceInDb;
}

export function deleteInvoice(id) {
  let invoiceInDb = invoicesDB.find(i => i._id === id);
  invoicesDB.splice(invoicesDB.indexOf(invoiceInDb), 1);
  return invoiceInDb;
}
