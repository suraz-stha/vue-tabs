<template>
    <div>
        <h2>Opportunities</h2>
        <b-table striped hover :headers="headers" :items="items"> 

        </b-table>
    </div>
</template>

<script>

export default {
    name: "opportunity",
    // props: ["items"],

    data: () => ({
            headers: [
                {
                text: "Stage",
                align: "left",
                value: "name"
            },
            { name: "# of Customers", value: "# of Customers"},
            { name: "Forward Rate", value: "Forward Rate"},
            { name: "Value", value: "Value"},
            { name: "Probability", value: "Probability"},
            { name: "Weighted Value", value: "Weighted Value"},


            ],

            items: [
                {
            "name": "Qualification",
            "# of Customers": 30,
            "Forward Rate": "33%",
            "Value": 3000,
            "Probability": "10%",
            "Weighted Value": 300
        },
        {
            "name": "Needs Analysis",
            "# of Customers": 10,
            "Forward Rate": "33%",
            "Value": 1000,
            "Probability": "25%",
            "Weighted Value": 250
        },
        {
            "name": "Proposal/Price Quote",
            "# of Customers": 3,
            "Forward Rate": "33%",
            "Value": 300,
            "Probability": "50%",
            "Weighted Value": 100
        },
        {
            "name": "Verbal Acceptance",
            "# of Customers": 1,
            "Forward Rate": "80%",
            "Value": 100,
            "Probability": "70%",
            "Weighted Value": 75
        },
        {
            "name": "Contract",
            "# of Customers": 3,
            "Forward Rate": "90%",
            "Value": 200,
            "Probability": "95%",
            "Weighted Value": 190
        },
        {
            "name": "Closed Won",
            "# of Customers": 5,
            "Forward Rate": "",
            "Value": 500,
            "Probability": "100%",
            "Weighted Value": 600
        },
            ]
            
        
    }),
}
</script>