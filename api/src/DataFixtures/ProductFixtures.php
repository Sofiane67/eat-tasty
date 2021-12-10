<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $burger = new Category;
        $burger->setCategoryName("Burger");
        $manager->persist($burger);

        $burger1 = new Product;
        $burger1->setTitle("Bacon Buddy")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("bacon-buddy.png")
            ->setPrice("7.99")
            ->setCategory($burger);
        $manager->persist($burger1);

        $burger2 = new Product;
        $burger2->setTitle("Cali Burger")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("cali-burger.png")
            ->setPrice("8.99")
            ->setCategory($burger);
        $manager->persist($burger2);

        $burger3 = new Product;
        $burger3->setTitle("Classic Burger")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("classic-burger.png")
            ->setPrice("5.99")
            ->setCategory($burger);
        $manager->persist($burger3);

        $burger4 = new Product;
        $burger4->setTitle("Double Cheese")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("double-cheese.jpg")
            ->setPrice("6.99")
            ->setCategory($burger);
        $manager->persist($burger4);

        $burger5 = new Product;
        $burger5->setTitle("Dream Burger")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("dream-burger.png")
            ->setPrice("10")
            ->setCategory($burger);
        $manager->persist($burger5);

        $burger6 = new Product;
        $burger6->setTitle("Rustic Burger")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("rustic-burger.jpg")
            ->setPrice("8.99")
            ->setCategory($burger);
        $manager->persist($burger6);

        $burger7 = new Product;
        $burger7->setTitle("Spicy Burger")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("spicy-burger.jpg")
            ->setPrice("8.99")
            ->setCategory($burger);
        $manager->persist($burger7);

        $burger8 = new Product;
        $burger8->setTitle("Waldo Burger")
            ->setDescription("Gummies tart sweet cake cotton candy sugar plum. Powder bonbon cheesecake chocolate bar soufflé marzipan bonbon bonbon. Sesame snaps donut jelly carrot cake sweet pudding oat cake toffee cake. Shortbread cookie chupa chups sweet roll carrot cake chocolate cake.")
            ->setImage("waldo-burger.jpg")
            ->setPrice("7.99")
            ->setCategory($burger);
        $manager->persist($burger8);

        $manager->flush();
    }
}
