class myTable
{
	constructor(options)
	{
		this.options=options;
		
	}

	addRowsInterface()
	{
		console.log("THIS RAN 1st time");
		    
		     
		/*this.options.data.forEach((element, i) => {
                //console.log(element, i)
                var t = document.getElementById("dashTable");
                var r = document.createElement("TR");
                
                r.innerHTML = `
                                             <tr>
                                                 <th scope="row">${element.id}</th>
                                                <td>${element.colData[0]}</td>
                                                <td>${element.colData[1]}</td>
                                                <td> <input type="text" value = ${element.colData[2]}></td>

                                                <td><input type="checkbox" ${element.colData[3] ? "checked" : ""} > </td>
                                            </tr>
                                    `
                                    console.log(r)
                t.querySelector("tbody").appendChild(r);});*/

		for(let i=this.options.data.length-1;i<this.options.data.length;i++)
		{
			var t = document.getElementById("dashTable");
                var r = document.createElement("TR");
                
                r.innerHTML = `
                                             <tr>
                                                 <th scope="row">${this.options.data[i].id}</th>
                                                <td>${this.options.data[i].colData[0]}</td>
                                                <td>${this.options.data[i].colData[1]}</td>
                                                <td> <input type="text" value = ${this.options.data[i].colData[2]}></td>

                                                <td><input type="checkbox" ${this.options.data[i].colData[3] ? "checked" : ""} > </td>
                                            </tr>
                                    `
                                    console.log(r)
                t.querySelector("tbody").appendChild(r);

		}

	}

	addRows(colData)
	{
		//Checking duplicacy through rowID
	/*	this.options.data.forEach((element) => {
			if(element.id == id)
			{
				alert("Duplicate ID, Please enter the details with a new id");
				this.addRowsInterface();
				return null;
			}
			else
			{
					this.options.data.push({id: id,colData:colData});
					this.addRowsInterface();
					console.log("rows were added",this.options);
			}
		});*/

		this.options.data.push(
		{
			id:this.options.data.length+1,
			colData:colData
		});
		this.addRowsInterface();
	

	}

	deleteRows(rowId)
	{
	console.log('Delete the element');
		

	}

	updateRows(rowId,data)
	{
		console.log("Following rows were deleted");
	}
}


let options = {
	coldefs: [{label: 'Text Columns',width: '40%',type: 'text'},
			{label: 'Input Column',width: '60%',type: 'input'},
			{label: 'Checkbox Column',width: '30px',type: 'checkbox'}],
	data:[]
}



var Table= new myTable (options);

Table.addRows(['Value2', 'value3','value3@gmail.com', true]);
Table.addRows(['Value2', 'value3','value3@gmail.com', false]);
Table.addRows(['Value2', 'value3','value3@gmail.com', true]);
Table.addRows(['Value2', 'value3','value3@gmail.com', false]);
console.log(Table);