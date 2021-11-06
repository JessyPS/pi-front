import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './components/produto/produto.component';
import { AboutPage } from './routes/about/about.component';
import { ContactPage } from './routes/contact/contact.component';
import { CreatePostComponent } from './routes/create-post/create-post.component';
import { HomePage } from './routes/home/home.component';
import { PostComponent } from './routes/post/post.component';
import { ProfileEditComponent } from './routes/profile-edit/profile-edit.component';
import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { EditPage } from './routes/user/edit/edit.component';
import { UserComponent } from './routes/user/user.component';


const routes: Routes = [
  { path: ''          , component: HomePage },
  { path: 'signin'    , component: SignInPage },
  { path: 'signup'    , component: SignUpPage },
  { path: 'about'     , component: AboutPage },
  { path: 'contact'   , component: ContactPage },
  { path: 'edit'      , component: EditPage },
  { path: 'p'      , component:  PostComponent},
  { path: 'editp'      , component:  ProfileEditComponent},
  { path: 'creates'      , component:  CreatePostComponent},
  { path: 'prof'      , component: UserComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
