<?php

namespace Vuetified\Models;

use Illuminate\Database\Eloquent\Model;

class SocialAccount extends Model
{
    protected $table = 'social_accounts';
    protected $guarded = [];

    public function user()
    {
    	return $this->belongsTo(Vuetified::userModel());
    }

}