package com.mlpj.ontology.Controllers;

import com.mlpj.ontology.JenaWork.InitJena;
import net.minidev.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MyController {

    @CrossOrigin
    @RequestMapping("/getArbitre")
    public List<JSONObject> getArbitre() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +

                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Arbitre .}";


        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }


    @CrossOrigin
    @RequestMapping("/getCommentateur")
    public List<JSONObject> getCommentateur() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +

                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Commentateur .}";


        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getJournaliste")
    public List<JSONObject> getJournaliste() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +

                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Journaliste .}";

        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getEntraineur")
    public List<JSONObject> getEntraineur() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +

                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Entraineur .}";

        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }


    @CrossOrigin
    @RequestMapping("/getSpectateur")
    public List<JSONObject> getSpectateur() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +

                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Spectateur .}";

        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getAthlete")
    public List<JSONObject> getAthlete() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?Y rdfs:subClassOf* ns:Athlete ." +
                        "?X rdf:type ?Y}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }


    @CrossOrigin
    @RequestMapping("/getPartie")
    public List<JSONObject> getPartie() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Partie .}";


        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getAllInstancesPersonne")
    public List<JSONObject> getPoliticalInstituteInstances() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?Y rdfs:subClassOf* ns:Personne ." +
                        "?X rdf:type ?Y}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getAllInstancesCompetition")
    public List<JSONObject> getAllInstancesCompetition() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?Y rdfs:subClassOf* ns:Competition ." +
                        "?X rdf:type ?Y}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getAllInstancesEquipe")
    public List<JSONObject> getAllInstancesEquipe() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?Y rdfs:subClassOf* ns:Equipe ." +
                        "?X rdf:type ?Y}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/describePartie")
    public List<JSONObject> describePartie() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?Y WHERE { ?Y rdfs:subClassOf* ns:Personne ." +
                        "?X rdfs:SubPropertyOF ns:joueAvec}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getAllObjectPrpoerty")
    public List<JSONObject> getObjectPrpoerty() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "PREFIX owl: <http://www.test123.com/test123-ontology.owl#>" +
                "PREFIX oo:  <http://www.w3.org/2002/07/owl#>" +
                "SELECT ?X  WHERE { ?X rdf:type oo:ObjectProperty ."
                + " }";


        List<JSONObject> resultSet = InitJena.getItemPropety(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getAllDataPrpoerty")
    public List<JSONObject> getDataPrpoerty() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "PREFIX owl: <http://www.test123.com/test123-ontology.owl#>" +
                "PREFIX oo:  <http://www.w3.org/2002/07/owl#>" +
                "SELECT ?X  WHERE { ?X rdf:type oo:DataTypeProperty ."
                + " }";


        List<JSONObject> resultSet = InitJena.getItemPropety(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }


    @CrossOrigin
    @RequestMapping("/getspecificpartie")
    public List<JSONObject> getspecificpartie() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX owl: <http://www.test123.com/test123-ontology.owl#>" +
                        "PREFIX oo:  <http://www.w3.org/2002/07/owl#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?Z WHERE {ns:Partie oo:DatatypeProperty ?Z ." +

                        "}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        return resultSet;
    }


    @CrossOrigin
    @RequestMapping("/getTelevision")
    public List<JSONObject> getTelevision() {

        String queryString = "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +

                "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT ?X WHERE { ?X rdf:type ns:Television .}";

        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getwebsite")
    public List<JSONObject> getwebsite() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?X rdf:type ns:Site_Web .}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getMedia")
    public List<JSONObject> getMedia() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?Y rdfs:subClassOf* ns:Media ." +
                        "?X rdf:type ?Y}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getInternationale")
    public List<JSONObject> getInternationale() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?X rdf:type ns:Internationale .}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }

    @CrossOrigin
    @RequestMapping("/getNationale")
    public List<JSONObject> getNationale() {

        String queryString =
                "PREFIX ns: <http://www.semanticweb.org/amirm/ontologies/2022/9/SportApp#>" +
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                        "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
                        "SELECT ?X WHERE { ?X rdf:type ns:Nationale .}";
        List<JSONObject> resultSet = InitJena.getItems(queryString);
        System.out.println(queryString);
        System.out.println(resultSet);
        return resultSet;
    }
}
