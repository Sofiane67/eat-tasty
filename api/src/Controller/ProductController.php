<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("api/products", name="products")
     */
    public function index(ProductRepository $productRepository): Response
    {
       $products = $productRepository->findAll();
       return $this->json($products, 200, [], ["groups" => "product"]);
    }
}
