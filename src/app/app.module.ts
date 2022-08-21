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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { GetPostsEffects } from './store/effects/get-posts.effects';

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
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([GetPostsEffects]),
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
