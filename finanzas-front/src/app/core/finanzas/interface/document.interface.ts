

export interface IDocumentRequest {
    fechaEmision:      string;
    fechaPago:         string;
    diasTranscurridos: number;
    totalRecibir:      number;
    retencion:         number;
    diasxAnio:         number;
    plazoTaza:         number;
    tasaEfectiva:      string;
    fechaDescuento:    string;
    CyGI:              number;
    CyGF:              number;
    periodoCapital:    number;
    tasaNominal:       number;
    accountId:         number;
    save:              number;
}

export interface IDocumentResponse {
    msg:  string;
    body: IBody;
    
}

export interface IBody {
    tasaEfectivaAnual:      string;
    tasaEfectivaXdias:      string;
    tasaDescontada:         string;
    descuentoTotal:         string;
    retencionRt:            string;
    retencionInput:         string;
    valorNeto:              string;
    valorTotalRecibirVR:    string;
    valorTotalEntregarVE:   string;
    tasaCosteEfectivaAnual: string;
    fechaEmision:           string;
    fechaPago:              string;
    fechaDescuento:         string;
    account:                number;
    id:                     number;
}
