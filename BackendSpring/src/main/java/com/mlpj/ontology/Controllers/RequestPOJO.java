package com.mlpj.ontology.Controllers;

public class RequestPOJO {

    private String Personne;

    public RequestPOJO(String personne) {
     
        this.Personne= personne;
    }

   
    
    public String getPersonne() {
        return Personne;
    }

    public void setPersonne(String Personne) {
        this.Personne = Personne;
    }
}
