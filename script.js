class myTable
{
	constructor(options)
	{
		this.options=options;
			
	}

	//Function for adding the headers in the table
	addHeaders(coldefs)
	{
		
		var t = document.getElementById("dashTable");
        var tr = document.createElement("TR");

        for (var j = 0; j < coldefs.length; j++) 
        {

    		var th = document.createElement('TH'); //column
    		var text = document.createTextNode(coldefs[j].label); //cell
    		th.style.width = coldefs[j].width;
    		th.appendChild(text);
    		tr.appendChild(th);
    	}
		t.querySelector('thead').appendChild(tr)
	}

	//Function for changing the interface 
	interfaceChange(i)
	{
		var t = document.getElementById("dashTable");
                var r = document.createElement("TR");
              
                
                r.innerHTML = `
                                             <tr>
                                                 <th scope="row">${this.options.data[i].id}</th>
                                                <td>${this.options.data[i].colData['first_name']}</td>
                                                <td>${this.options.data[i].colData['last_name']}</td>
                                                <td> <input type="text" value = ${this.options.data[i].colData['email']}></td>

                                                <td><input type="checkbox" ${this.options.data[i].colData['checkBox'] ? "checked" : ""} > </td>
                                            </tr>
                                    `


                t.querySelector("tbody").appendChild(r);

	}

	//function for changing the interface after addition
	addRowsInterface()
	{
		
		for(let i=this.options.data.length-1;i<this.options.data.length;i++)
		{
			this.interfaceChange(i);
		}
	}

	//Function for adding the rows
	addRows(...colData)
	{
		for(let elem of colData)
		{
			this.options.data.push(
		{
			id:this.options.data.length+1,
			colData:elem
		});
			//console.log("ADDD=====>", this.options.data);
			this.addRowsInterface();
		}		
	}

	//Function for deleting the rows
	deleteRows(...rowId)
	{
		let t = document.getElementsByTagName('tr');
		for(let elem of rowId)
		{
			for(let j=0;j<this.options.data.length;j++)
			{
				if(elem == this.options.data[j].id)
				{
					this.options.data.splice(j,1);
				
					t[elem].innerHTML='';	
				}
			}
		}
	}

	//function for updating the rows
	updateRows(...args)
	{
		let t = document.getElementsByTagName('tr');
		for(let elem of args)
		{
			//console.log(elem);
			this.options.data.forEach((x) => {
				if(elem.id == x.id)
				{
					//console.log(x);

					for (let keys in elem.data)
					{
						x.colData[keys] = elem.data[keys];
					}

					//console.log(x);
					t[elem.id].innerHTML=` <tr>
                                                 <th scope="row">${x.id}</th>
                                                <td>${x.colData['first_name']}</td>
                                                <td>${x.colData['last_name']}</td>
                                                <td> <input type="text" value = ${x.colData['email']}></td>

                                                <td><input type="checkbox" ${x.colData['checkBox'] ? "checked" : ""} > </td>
                                            </tr>`;
					
				}
			});
		}		
	}
}



let options = {
	coldefs:[
	{label:'#',type:'text',id:'id', width:'10%'},
	{label:'First Name',type:'text',id:'first_name',width:'20%'},
	{label:'Last Name',type:'text',id:'last_name',width:'20%'},
	{label:'Email',type:'input',id:'email',width:'30%'},
	{label:'Checkbox', type:'checkbox',id:'checkBox',width:'20%'}],
	data:[]
};



var Table= new myTable (options);
Table.addHeaders(options.coldefs)

Table.addRows({first_name:'Value 1', last_name:'value1', email:'value1@gmail.com', checkBox:true},{first_name:'Value 2', last_name:'value2', email:'value2@gmail.com', checkBox:true});
Table.addRows({first_name:'Value 3', last_name:'value3', email:'value3@gmail.com', checkBox:false});
Table.addRows({first_name:'Value 4', last_name:'value4', email:'value3@gmail.com', checkBox:false},{first_name:'Value 5', last_name:'value5', email:'value5@gmail.com', checkBox:true});


//Table.deleteRows(3,1);

Table.updateRows({id:1, data:{ checkBox:true} },{id:2, data:{ email:'value_5@gmail.com',checkBox:false} },{id:5, data:{ email:'value_5@gmail.com'} });
