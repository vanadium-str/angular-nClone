import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllPostsComponent } from './components/all-posts/all-posts.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostViewComponent } from './components/post-view/post-view.component';
import { FocusDirective } from './directives/focus.directive';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    ModalComponent,
    StartPageComponent,
    PostViewComponent,
    FocusDirective,
    AddPostComponent,
    CommentsComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
