import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from "@angular/router";
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null as any,
    id: 0
  }

  constructor(private productServise: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void{

    if(this.product.name == "" || this.product.price == null){

      this.productServise.showMensage("A tabela não está completa");

    }
    else{
      this.productServise.create(this.product).subscribe(()=> {

        this.productServise.showMensage("Produto Criado");
        this.router.navigate(["/products"]);
      })
    }

  }

  cancel(): void{
    this.router.navigate(["/products"]);
  }


}
