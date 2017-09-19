<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Vuetified\Traits\UserMutator;
use Laravel\Passport\HasApiTokens;
use Cviebrock\EloquentSluggable\Sluggable;

use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    use HasApiTokens,Notifiable, Sluggable, UserMutator;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public $incrementing = false;
    
    protected $fillable = [
        'name', 'email', 'password', 'username'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $dates = ['created_at', 'updated_at'];

    public function sluggable()
    {
        return [
            'username' => [
                'source' => 'name'
            ]
        ];
    }

    public function reservedSlugs()
    {
        return ['admin', 'support', 'api', 'administrator','helpdesk','customer-support','forum','blog','shop','billing','products'];
    }

    
}